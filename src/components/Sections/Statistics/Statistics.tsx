import React from "react";
import { useTranslation } from "react-i18next";

const Statistics: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="section-statistics">
        <div className="container">
          <div className="top">
            <h3 className="title">
              <p
                dangerouslySetInnerHTML={{
                  __html: t("sections.statistics.title"),
                }}
              />
            </h3>
          </div>
          <div className="statistic-boxes">
            <div className="statistic-box">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.9166 20.4167C37.9166 26.86 32.6932 32.0833 26.25 32.0833C19.8067 32.0833 14.5833 26.86 14.5833 20.4167C14.5833 13.9733 19.8067 8.75 26.25 8.75C32.6932 8.75 37.9166 13.9733 37.9166 20.4167Z"
                  stroke="#242BC4"
                  strokeWidth="4"
                />
                <path
                  opacity="0.4"
                  d="M43.75 32.0833C50.1932 32.0833 55.4167 26.86 55.4167 20.4167C55.4167 13.9733 50.1932 8.75 43.75 8.75"
                  stroke="#242BC4"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32.0833 40.8333H20.4166C12.3625 40.8333 5.83331 47.3626 5.83331 55.4166C5.83331 58.6384 8.44498 61.25 11.6666 61.25H40.8333C44.0551 61.25 46.6666 58.6384 46.6666 55.4166C46.6666 47.3626 40.1374 40.8333 32.0833 40.8333Z"
                  stroke="#242BC4"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M49.5833 40.8333C57.6374 40.8333 64.1666 47.3626 64.1666 55.4166C64.1666 58.6384 61.5551 61.25 58.3333 61.25H53.9583"
                  stroke="#242BC4"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>{t("sections.statistics.box1")}</p>
            </div>
            <div className="statistic-box">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.967 33.5417L60.7311 28.9787C61.283 25.685 61.5589 24.0382 60.7093 22.9566C59.8599 21.875 58.2905 21.875 55.1518 21.875H14.8481C11.7095 21.875 10.1401 21.875 9.29066 22.9566C8.44115 24.0382 8.71701 25.685 9.26876 28.9787L12.6608 49.2278C13.857 56.3687 14.4551 59.939 16.8236 62.0527C19.1921 64.1667 22.3621 64.1667 29.1667 64.1667H35"
                  stroke="#242BC4"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  opacity="0.4"
                  d="M61.25 51.0416V43.75C55.4167 43.75 51.0417 40.8333 51.0417 40.8333C51.0417 40.8333 46.6667 43.75 40.8333 43.75V51.0416C40.8333 61.25 51.0417 64.1666 51.0417 64.1666C51.0417 64.1666 61.25 61.25 61.25 51.0416Z"
                  stroke="#242BC4"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M20.4167 21.875V20.4166C20.4167 12.3625 26.9459 5.83331 35 5.83331C43.0541 5.83331 49.5833 12.3625 49.5833 20.4166V21.875"
                  stroke="#242BC4"
                  strokeWidth="4"
                />
                <path
                  d="M13.125 51.0417H30.625"
                  stroke="#242BC4"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>

              <p>{t("sections.statistics.box2")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
