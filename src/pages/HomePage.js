import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { Spinner } from "react-bootstrap";


const HomePage = () => {

  // const { isLoading, error, data, isFetching } = useQuery("getData", () =>
  //   fetch(
  //     "https://api.codingthailand.com/api/news?page=1&per_page=3"
  //   ).then((res) => res.json())
  // );

  const query = useQuery("getData", () =>{
    const controller = new AbortController();
    const signal = controller.signal

   const promise = fetch(
      "https://api.codingthailand.com/api/news?page=1&per_page=3",{
        method: 'get',
        signal: signal
      }
    ).then((res) => res.json())

      //cancel request
      promise.cancel = () => controller.abort()

    return promise
  }
  );

  const { isLoading, error, data, isFetching } = query

  if (isLoading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center mt-5">
        <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่</p>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <main role="main">
          {/* Main jumbotron for a primary marketing message or call to action */}
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">ยินดีต้อนรับทุกคน </h1>
              <p>
                เว็บนี้พัฒนาด้วย React เป็นคอร์สเรียนวิดิโอออนไลน์จาก
                codingThailand
              </p>
              <p>
                <BsFillHeartFill color="red" size="6em" />
                <Link
                  to="/product"
                  className="btn btn-primary btn-lg"
                  role="button"
                >
                  สินค้าทั้งหมด
                </Link>
              </p>
            </div>
          </div>
          <div className="container">
            {/* Example row of columns */}
            <div className="row">
              <div className="mx-auto">
                {isFetching? 'กำลังอัปเดต':null}

              </div>
              {data.data.map((news, index) => {
                return (
                  <div className="col-md-4" key={news.id}>
                    <h2>{news.topic}</h2>
                    <p>
                     {news.detail}
                    </p>
                    <p>
                      หมวดหมู่ซ{news.name}
                    </p>
                  </div>
                );
              })}
            </div>
            <hr />
          </div>{" "}
          {/* /container */}
        </main>
      </div>
    </>
  );
};

export default HomePage;
