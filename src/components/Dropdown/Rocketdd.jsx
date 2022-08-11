import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useGetRocketsQuery } from "../../Services/spaceXAPI";
import Loading from "../Loading";

const Rocketdd = ({ dropdown }) => {
  const { data: array, isFetching } = useGetRocketsQuery();

  if (isFetching) return <Loading />;

  return (
    <>
      {/* Rockets Dropdown */}
      {dropdown && (
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="flex rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              Rocket
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-36 -top-2 w-full flex flex-col gap-y-1 mt-2 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
              {array?.map((r) => (
                <Menu.Item key={r.id} className="py-1 px-2 hover:bg-blue-900">
                  <Link to={`/rocket/${r.id}`} className="">
                    {r.name}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      )}

      {!dropdown &&
        array.map((r) => (
          <>
            <div className="px-4 leading-6 mt-6 w-full py-2 font-semibold">
              <Link to={`/rocket/${r.id}`} className="">
                <span className="capitalize text-2xl">{r?.name} </span>
                <span
                  className={
                    r.active
                      ? "text-emerald-500 uppercase"
                      : "text-red-500 uppercase"
                  }
                >
                  {r?.active ? "active" : "inactive"}
                </span>
                <img src={r.flickr_images[0]} alt="" className="h-1/2" />
              </Link>
            </div>
            <div className="md:py-8 flex flex-col gap-y-2">
              <p className="flex flex-col py-1 px-4">
                cost per launch
                <span className="text-3xl font-extrabold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    notation: "compact",
                    compactDisplay: "long",
                  }).format(r?.cost_per_launch)}
                </span>
              </p>
              <p className="flex flex-col py-1 px-4">
                success %
                <span className="text-3xl font-extrabold">
                  {r?.success_rate_pct}%
                </span>
              </p>
              <p className="flex flex-col py-1 px-4">
                first launch
                <span className="text-3xl font-extrabold">
                  {new Date(r?.first_flight).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </p>
              <p className="flex flex-col py-1 px-4">
                height
                <span className="text-3xl font-extrabold">
                  {r?.height?.meters} meters
                </span>
              </p>
              <p className="flex flex-col py-1 px-4">
                diameter
                <span className="text-3xl font-extrabold">
                  {r?.diameter?.meters} meters
                </span>
              </p>
              <p className="flex flex-col py-1 px-4">
                mass
                <span className="text-3xl font-extrabold">
                  {new Intl.NumberFormat("en-US", {
                    style: "unit",
                    unit: "kilogram",
                    unitDisplay: "short",
                  }).format(r?.mass?.kg)}
                </span>
              </p>
            </div>
          </>
        ))}
    </>
  );
};

export default Rocketdd;
