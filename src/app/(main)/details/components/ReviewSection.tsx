"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import { Progress } from "./Progress ";

interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: "1",
    author: "Emily Selman",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    content:
      "This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.",
    date: "July 12, 2023",
  },
  {
    id: "2",
    author: "Hector Gibbons",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    content:
      "Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!",
    date: "July 5, 2023",
  },
  {
    id: "3",
    author: "Mark Edwards",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    content:
      "I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.",
    date: "June 29, 2023",
  },
];

const ratingDistribution = [
  { stars: 5, percentage: 63 },
  { stars: 4, percentage: 10 },
  { stars: 3, percentage: 6 },
  { stars: 2, percentage: 12 },
  { stars: 1, percentage: 9 },
];

export function ReviewSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                  <Star className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">
                  Based on 1624 reviews
                </span>
              </div>

              <div className="space-y-2">
                {ratingDistribution.map(({ stars, percentage }) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="w-4 text-sm">{stars}</span>
                    <Star className="w-4 h-4" />
                    <Progress value={percentage} className="h-2" />
                    <span className="w-12 text-sm text-muted-foreground">
                      {percentage}%
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Share your thoughts</h3>
                <p className="text-sm text-muted-foreground">
                  If you&apos;ve used this product, share your thoughts with
                  other customers
                </p>
                <Button className="w-full">Write a review</Button>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {reviews.map((review) => (
                <div key={review.id} className="space-y-4">
                  <div className="flex  items-start gap-4">
                    <Image
                      src={review.avatar}
                      alt={review.author}
                      width={40}
                      height={50}
                      objectFit="cover"
                      className="rounded-full"
                    />
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">{review.author}</h4>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <time className="text-sm text-muted-foreground">
                      {review.date}
                    </time>
                  </div>
                  <p className="text-gray-600">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
