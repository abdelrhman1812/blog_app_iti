import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserFollowerSkeleton = ({ count = 3 }) => {
  return (
    <Card>
      <CardHeader>
        <Skeleton width={100} height={24} />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-3 p-2 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Skeleton circle width={40} height={40} />
                <div className="space-y-2">
                  <Skeleton width={120} height={16} />
                  <Skeleton width={80} height={14} />
                </div>
              </div>
              <Skeleton width={80} height={32} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserFollowerSkeleton;
