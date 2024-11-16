import { MySelect } from "@/components";
import { setAllCompany } from "@/store/companySlice/companySlice";
import { useAppDispatch } from "@/store/hooks/hooks";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa6";
import { Link, Outlet, useParams } from "react-router-dom";

const Companies: React.FC = () => {
  const [companies, setCompanies] = useState<ICompany[]>();
  const { companySlug } = useParams();

  const dispatch = useAppDispatch();

  const { t, i18n } = useTranslation();
  const languages: string[] = Object.keys(i18n.options.resources || {});

  async function getAllCompanies() {
    try {
      const response = await axios.get(
        "https://bizneskatalog.webclub.uz/api/companies"
      );

      if (response.status === 200) {
        setCompanies(response.data.companies);
        dispatch(setAllCompany(response.data.companies));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <>
      {!companySlug ? (
        <div className="companies-page">
          <div className="inner">
            <div className="top">
              <h3 className="title">{t("choose-company")}</h3>
              <MySelect
                current={i18n.language}
                list={languages}
                afterIcon={<FaAngleDown />}
              />
            </div>
            <div className="companies">
              {companies?.length
                ? companies.map((company, index) => (
                    <Link to={`/${company.slug}`} key={index}>
                      {company.name}
                    </Link>
                  ))
                : ""}
            </div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Companies;
