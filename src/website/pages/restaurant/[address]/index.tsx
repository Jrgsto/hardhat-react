import Head from "@components/Head";
import Layout from "@components/Layout";
import { MenuManagement } from "@components/Restaurant/MenuManagement/MenuManagement";
import { TableManagement } from "@components/Restaurant/TableManagement";
import { useEthers } from "@hooks/useEthers";
import { IRestaurant } from "@local-types/restaurant";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { RestaurantService } from "services";

const Restaurant: NextPage = () => {
  const router = useRouter();
  const [restaurant, setRestaurant] = useState<IRestaurant>();
  const { getProvider } = useEthers();

  const retrieveRestaurantDetails = useCallback(async () => {
    const { address } = router.query;
    const provider = getProvider();
    if (typeof address === "string" && provider) {
      const contract = RestaurantService.getContract(address, provider);
      const restaurant = await RestaurantService.getDetails(contract, provider);
      setRestaurant(restaurant);
    }
  }, []);

  useEffect(() => {
    retrieveRestaurantDetails();
  }, [retrieveRestaurantDetails]);

  return (
    <Layout>
      <Head
        title="Wireshot - Restaurant"
        description="Your Restaurant Payment solution"
      />
      {restaurant && (
        <div className="page-content justify-center">
          <div className="hero flex flex-col items-center justify-center">
            <div className="flex flex-col gap-8">
              <h1>{restaurant.name}</h1>
              <div className="flex flex-col gap-20">
                <div>
                  <h2>Table Management</h2>
                  <TableManagement restaurant={restaurant} />
                </div>
                <div>
                  <h2>Menu Management</h2>
                  <MenuManagement restaurant={restaurant} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Restaurant;
