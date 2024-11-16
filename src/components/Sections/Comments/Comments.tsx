import React from "react";
import { useTranslation } from "react-i18next";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Comments: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="section-comments">
        <div className="container">
          <div className="section-title">
            <h3 className="title">{t("sections.comments.title")}</h3>
          </div>

          <div className="section-inner">
            <div className="comments">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".comment-prev",
                  nextEl: ".comment-next",
                }}
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                  },
                  540: {
                    slidesPerView: 2,
                  },

                  768: {
                    slidesPerView: 2,
                  },
                  1000: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <p className="message">
                    Eshiklar juda ham sifatli va tez tayyorlab berishadi.
                    Dizaynlari ham eng ohirgi rusumda va yillab rusumdan
                    qolmaydi.
                  </p>
                  <div className="user">
                    <div className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="#787996"
                          strokeWidth="2"
                        />
                        <path
                          d="M14 14H10C7.23858 14 5 16.2386 5 19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19C19 16.2386 16.7614 14 14 14Z"
                          stroke="#787996"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h4 className="user-name">Jamila Tursunova</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="message">
                    Eshiklar juda ham sifatli va tez tayyorlab berishadi.
                    Dizaynlari ham eng ohirgi rusumda va yillab rusumdan
                    qolmaydi.
                  </p>
                  <div className="user">
                    <div className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="#787996"
                          strokeWidth="2"
                        />
                        <path
                          d="M14 14H10C7.23858 14 5 16.2386 5 19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19C19 16.2386 16.7614 14 14 14Z"
                          stroke="#787996"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h4 className="user-name">Jamila Tursunova</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="message">
                    Eshiklar juda ham sifatli va tez tayyorlab berishadi.
                    Dizaynlari ham eng ohirgi rusumda va yillab rusumdan
                    qolmaydi.
                  </p>
                  <div className="user">
                    <div className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="#787996"
                          strokeWidth="2"
                        />
                        <path
                          d="M14 14H10C7.23858 14 5 16.2386 5 19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19C19 16.2386 16.7614 14 14 14Z"
                          stroke="#787996"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h4 className="user-name">Jamila Tursunova</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="message">
                    Eshiklar juda ham sifatli va tez tayyorlab berishadi.
                    Dizaynlari ham eng ohirgi rusumda va yillab rusumdan
                    qolmaydi.
                  </p>
                  <div className="user">
                    <div className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="#787996"
                          strokeWidth="2"
                        />
                        <path
                          d="M14 14H10C7.23858 14 5 16.2386 5 19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19C19 16.2386 16.7614 14 14 14Z"
                          stroke="#787996"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h4 className="user-name">Jamila Tursunova</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="message">
                    Eshiklar juda ham sifatli va tez tayyorlab berishadi.
                    Dizaynlari ham eng ohirgi rusumda va yillab rusumdan
                    qolmaydi.
                  </p>
                  <div className="user">
                    <div className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="#787996"
                          strokeWidth="2"
                        />
                        <path
                          d="M14 14H10C7.23858 14 5 16.2386 5 19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19C19 16.2386 16.7614 14 14 14Z"
                          stroke="#787996"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h4 className="user-name">Jamila Tursunova</h4>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="bottom">
                <div className="swiper-btns">
                  <button className="comment-prev">
                    <HiArrowLeft />
                    <div className="swiper-btns"></div>
                  </button>
                  <button className="comment-next">
                    <HiArrowRight />
                  </button>
                </div>
                <button className="comment-btn">
                  {t("button.comment-btn")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comments;
