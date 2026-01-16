"use client";

import PageLayout from "@/components/layout";
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageBreadcrumb from "@/components/page-breadcrumb";
import { Typography } from "@/components/ui/typography";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import StarRatings from "react-star-ratings";
import Image from "next/image";
import ProductInfo from "./tabs/product-info";
import Branches from "./branches";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import bankAction from "@/redux/modules/bank/bank.action";
import { useParams } from "next/navigation";
import { selectBank } from "@/redux/modules/bank/bank.selector";
import { BankType } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import ATM from "./tabs/atms";
import Cards from "./tabs/cards";
import Loans from "./tabs/loans";
import Review from "./tabs/review";

const BankDetail = () => {
  const id = useParams().id as string;

  const { data, loading }: { loading: boolean; error: any; data: BankType } =
    useAppSelector(selectBank);


  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(bankAction.getBankById(id));
  }, []);
  return (
    <PageLayout>
      <div className="bg-[#EEE] h-full pb-8">
        <div className="container py-6 ">
          <PageBreadcrumb />
        </div>
        {loading ? (
          <div className="container">
            <Skeleton className="w-full h-[400px]" />
          </div>
        ) : (
          <div className="container">
            <div className=" bg-white border border-gray-300">
              <div className="flex justify-between items-start gap-6 p-8 pb-0">
                <div className="flex gap-8">
                  <div className="shrink-0 bg-white rounded-2xl shadow-md border border-gray-100 p-2 w-32 h-32 flex items-center justify-center">
                    <img src={data.logo?.url} className="w-20 object-contain" alt={data.name} />
                  </div>

                  <div className="flex flex-col pt-2">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.name}</h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div className="flex gap-2">
                        <span className="rounded-full bg-blue-100 px-4 py-1.5 text-blue-700 font-medium text-xs">
                          {data?.type}
                        </span>
                        <span className="rounded-full bg-blue-100 px-4 py-1.5 text-blue-700 font-medium text-xs">
                          Multinational
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-blue-400">
                        <Heart className="hidden" /> {/* Keeping import but hiding for now if needed later, or replace with MapPin */}
                        {/* Replacing Heart with MapPin but need import. For now using text or existing icon if available? 
                            I see Heart imported. I need MapPin. 
                            I will try to use MapPin if I add it to imports, but to be safe I'll assume I can add it or just use text for now if imports are rigid.
                            Actually, I can use the same import trick or just text.
                            Let's rely on adding MapPin to imports in a separate step or just assume I can edit imports later.
                            Wait, I can edit imports in a standard replace if I view the top. 
                            Since I am only replacing a block in the middle, I cannot add imports here.
                            I will use a generic icon or text for now, or use Heart temporarily.
                            Actually, I will just use text and maybe add the icon later.
                            Wait, the plan said "MapPin icon". I should update imports first or do a multi-replace.
                            I will do a multi-replace to add the import as well.
                        */}
                        <span className="flex items-center gap-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                          <span className="text-blue-400 font-medium">{data.headquarter || "Bonanjo, Douala"}</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <StarRatings
                          rating={4.5}
                          starRatedColor="#FFC107" // Yellow color from image
                          numberOfStars={5}
                          starSpacing="1px"
                          starDimension="16px"
                        />
                        <span className="font-bold text-gray-900">(200)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Button className="bg-[#2D7398] hover:bg-[#256080] text-white px-8 py-2.5 h-auto text-base rounded-md font-medium">
                    Contact {data.name}
                  </Button>
                </div>
              </div>
              <div className="-my-6 mb-6 hid">
                <Tabs defaultValue="productInformation" className="">
                  <div className="border-b border-gray-300">
                    <TabsList className="container w-full  max-w-lg ml-44">
                      <TabsTrigger
                        className="border-b-2"
                        value="productInformation"
                      >
                        General Information
                      </TabsTrigger>
                      <TabsTrigger disabled className="border-b-2" value="services">
                        Services
                      </TabsTrigger>
                      <TabsTrigger disabled className="border-b-2" value="accounts">
                        Accounts
                      </TabsTrigger>
                      <TabsTrigger className="border-b-2" value="branches">
                        Branches
                      </TabsTrigger>
                      <TabsTrigger className="border-b-2" value="atms">
                        ATMs
                      </TabsTrigger>
                      <TabsTrigger className="border-b-2" value="cards">
                        Cards
                      </TabsTrigger>
                      <TabsTrigger className="border-b-2" value="loans">
                        Loans
                      </TabsTrigger>
                      <TabsTrigger className="border-b-2" value="reviews">
                        Reviews
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="productInformation">
                    <ProductInfo {...data} />
                  </TabsContent>

                  <TabsContent value="services">services</TabsContent>
                  <TabsContent value="accounts">accounts</TabsContent>
                  <TabsContent value="branches">
                    <Branches />
                  </TabsContent>
                  <TabsContent value="atms">
                    <ATM />
                  </TabsContent>
                  <TabsContent value="cards">
                    <Cards />
                  </TabsContent>
                  <TabsContent value="loans">
                    <Loans />
                  </TabsContent>
                  <TabsContent value="reviews">
                    <Review />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default BankDetail;
