import React from "react";
import Loading from "../components/Loading";
import { useGetCompanyInfoQuery } from "../Services/spaceXAPI";
import Logo from "../components/Logo";

const Company = () => {
  const { data: companyData, isFetchingCompany } = useGetCompanyInfoQuery();

  if (isFetchingCompany) return <Loading />;

  return (
    <>
      <div className="relative bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <Logo />
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-3xl font-bold text-indigo-300 tracking-wide uppercase">
              Company Summary
            </h2>
            <p className="mt-5 text-lg text-gray-300">{companyData?.summary}</p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              <p>
                <span className="block text-2xl font-bold text-white">
                  Number of Employees
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {companyData?.employees}
                  </span>
                </span>
              </p>
              <p>
                <span className="block text-2xl font-bold text-white">
                  Number of Launch Sites
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {companyData?.launch_sites}
                  </span>
                </span>
              </p>
              <p>
                <span className="block text-2xl font-bold text-white">
                  Number of Rockets
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {companyData?.vehicles}
                  </span>
                </span>
              </p>
              <p>
                <span className="block text-2xl font-bold text-white">
                  Company Valuation
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      notation: "compact",
                      compactDisplay: "long",
                    }).format(companyData?.valuation)}
                  </span>
                </span>
              </p>
            </div>
            <h2 className="text-3xl font-bold text-indigo-300 tracking-wide uppercase my-4">
              Management: Executive
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              <p>
                <span className="block text-2xl font-bold text-white">
                  Chief Executive Officer
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {companyData?.ceo}
                  </span>
                </span>
              </p>
              <p>
                <span className="block text-2xl font-bold text-white">
                  Chief Operating Officer
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {companyData?.coo}
                  </span>
                </span>
              </p>
              <p>
                <span className="block text-2xl font-bold text-white">
                  Chief Technology Officer
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {companyData?.cto}
                  </span>
                </span>
              </p>
              <p>
                <span className="block text-2xl font-bold text-white">
                  Propulsion CTO
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {companyData?.cto_propulsion}
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
