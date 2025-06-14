import { Card, CardContent } from "@/components/ui/card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "./skeleton-wrapper";

const ProfileSkeleton = () => {
  return (
    <SkeletonWrapper>
      <div className="max-w-4xl mx-auto py-6 px-4">
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <Skeleton circle width={128} height={128} />

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <Skeleton width={150} height={32} />
                    <Skeleton width={100} height={36} />
                  </div>

                  <Skeleton count={2} height={16} />

                  <div className="flex items-center justify-center md:justify-start space-x-6 text-sm text-gray-500">
                    <Skeleton width={100} height={16} />
                    <Skeleton width={120} height={16} />
                    <Skeleton width={80} height={16} />
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-center md:justify-start space-x-8">
                    <div className="text-center">
                      <Skeleton width={40} height={24} />
                      <Skeleton width={40} height={16} />
                    </div>
                    <div className="text-center">
                      <Skeleton width={40} height={24} />
                      <Skeleton width={60} height={16} />
                    </div>
                    <div className="text-center">
                      <Skeleton width={40} height={24} />
                      <Skeleton width={60} height={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Skeleton */}
        <div className="mb-6">
          <Skeleton height={40} />
        </div>

        {/* Posts Skeleton */}
        <div className="space-y-6">
          {Array.from({ length: 2 }, (_, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <Skeleton height={24} width="60%" className="mb-4" />
                <Skeleton count={3} height={16} className="mb-4" />
                <Skeleton height={200} className="mb-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SkeletonWrapper>
  );
};

export default ProfileSkeleton;
