import Head from "@components/Head";
import Layout from "@components/Layout";
import { MenuManagement } from "@components/Restaurant/MenuManagement/MenuManagement";
import { TableManagement } from "@components/Restaurant/TableManagement";
import { useRestaurant } from "@context/restaurant";
import { userService } from "@hooks/useService";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Restaurant: NextPage = () => {
  const router = useRouter();
  const { address } = router.query;
  const { restaurant, setRestaurant } = useRestaurant();
  const { RestaurantService } = userService("evm");

  useEffect(() => {
    if (typeof address === "string") initializeRestaurant(address);
  }, []);

  const initializeRestaurant = async (address: string) => {
    setRestaurant(await RestaurantService.getRestaurant(address));
  };

  return (
    <Layout isLoading={!restaurant}>
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
                  <TableManagement />
                </div>
                <div>
                  <h2>Menu Management</h2>
                  <MenuManagement />
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
