import Comment from "@/components/comment";
import Description from "@/components/description";
import Fieldset from "@/components/fieldset";
import PricePlan from "@/components/price-plan";
import ProductDetail from "@/components/product-detail";
import ProductMediaCarousel from "@/components/product-media-carousel";
import ProductReview from "@/components/product-review";
import TabInfoContainer from "@/components/tab-info-container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import VideoReview from "@/components/video-review";
import { BankType } from "@/types";
import { AppWindowMac, Gem, Globe, MapPin, MessageCircle, UserCircle, Users } from "lucide-react";
import React from "react";
import ReviewForm from "./review-form";

export default function ProductInfo(props: BankType) {

  return (
    <>
      <TabInfoContainer>
        <Fieldset title={`About ${props.localName}`}>
          <div className="p-6">
            <Description>
              {props.description}
            </Description>

            <div className="border-t border-gray-300 mt-6 py-5">
              <Typography className="text-sky-700">{props.name} Details</Typography>

              <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProductDetail title="Bank Name" desc={props.name} icon={<Gem />} />
                <ProductDetail
                  title="DG"
                  desc={props.nameDG}
                  icon={<UserCircle />}
                />
                <ProductDetail
                  title="Headquater"
                  desc={props.headquarter}
                  icon={<MapPin />}
                />

                <ProductDetail
                  title="Bank Website"
                  desc={props.name}
                  url={props.website || "https://www.g2.com"}
                  icon={<AppWindowMac />}
                />
                <ProductDetail
                  title="Customers"
                  desc={props.customerCount}
                  icon={<Users />}
                />
                <ProductDetail
                  title="Discussions"
                  desc={`${props.name} Community`}
                  url="#"
                  icon={<MessageCircle />}
                />
              </div>
            </div>
          </div>
        </Fieldset>
      </TabInfoContainer>

      {/* <TabInfoContainer title="Recent Trello Reviews">
        <div className="grid grid-cols-3 gap-5">
          <ProductReview />
          <ProductReview />
          <ProductReview />
        </div>
      </TabInfoContainer> */}

      {/* <TabInfoContainer>
        <Fieldset title="Trello Pricing">
          <div className="grid grid-cols-4 gap-5 p-7">
            <PricePlan />
            <PricePlan />
            <PricePlan />
            <PricePlan />
          </div>
        </Fieldset>
      </TabInfoContainer> */}

      {/* <TabInfoContainer title="Trello Media">
        <div className="">
          <ProductMediaCarousel />
        </div>
      </TabInfoContainer> */}

      {/* <TabInfoContainer>
        <Fieldset title="Video Reviews">
          <div className="p-7 space-y-4">
            <div className="grid grid-cols-3 gap-6">
              <VideoReview />
              <VideoReview />
              <VideoReview />
            </div>

            <Button>See all video reviews</Button>
          </div>
        </Fieldset>
      </TabInfoContainer> */}

      <TabInfoContainer title="Reviews">
        <div className="space-y-8">
          <ReviewForm />
          <Comment />
        </div>
      </TabInfoContainer>
    </>
  );
}
