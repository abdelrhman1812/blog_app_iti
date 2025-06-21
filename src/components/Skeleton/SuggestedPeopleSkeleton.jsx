import { Card, CardContent } from "@/components/ui/card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "./skeleton-wrapper";

const SuggestedPeopleSkeleton = () => {
  return (
    <SkeletonWrapper>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }, (_, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-center">
                {/* Dismiss Button */}
                <div className="flex justify-end mb-2">
                  <div className="w-6 h-6">
                    <Skeleton circle width={24} height={24} />
                  </div>
                </div>

                {/* Avatar */}
                <div className="mb-4">
                  <Skeleton circle width={80} height={80} className="mx-auto" />
                </div>

                {/* Name */}
                <div className="mb-1">
                  <Skeleton width={120} height={20} />
                </div>

                {/* Username */}
                <div className="mb-2">
                  <Skeleton width={100} height={14} />
                </div>

                {/* Bio */}
                <div className="mb-3">
                  <Skeleton count={2} height={14} />
                </div>

                {/* Location & Profession */}
                <div className="flex items-center justify-center space-x-4 text-xs mb-3">
                  <div className="flex items-center">
                    <Skeleton width={80} height={12} />
                  </div>
                  <div className="flex items-center">
                    <Skeleton width={90} height={12} />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-center space-x-4 text-xs mb-4">
                  <Skeleton width={60} height={12} />
                  <Skeleton width={50} height={12} />
                </div>

                {/* Mutual Friends */}
                <div className="flex items-center justify-center mb-4">
                  <Skeleton width={140} height={16} />
                </div>

                {/* Common Interests */}
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {Array.from({ length: 3 }, (_, index) => (
                    <Skeleton
                      key={index}
                      width={Math.random() * 30 + 50}
                      height={24}
                      borderRadius={12}
                    />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Skeleton width={80} height={32} borderRadius={6} />
                  <Skeleton width={90} height={32} borderRadius={6} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SkeletonWrapper>
  );
};

export default SuggestedPeopleSkeleton;
