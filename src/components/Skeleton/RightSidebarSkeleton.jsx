import { Card, CardContent } from "@/components/ui/card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "./skeleton-wrapper";

const RightSidebarSkeleton = () => {
  return (
    <SkeletonWrapper>
      {/* Friend Suggestions Skeleton */}
      <Card>
        <CardContent className="">
          <Skeleton width={120} height={16} className="mb-3" />
          <div className="space-y-4">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Skeleton circle width={40} height={40} />
                </div>
                <div className="flex space-x-1">
                  <Skeleton width={32} height={32} />
                  <Skeleton width={32} height={32} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </SkeletonWrapper>
  );
};

export default RightSidebarSkeleton;
