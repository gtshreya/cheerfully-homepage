
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Battery, Info } from "lucide-react";

interface PowerStationCardProps {
  name: string;
  location: string;
  type: string;
  capacity: string;
  imageUrl: string;
}

const PowerStationCard = ({
  name,
  location,
  type,
  capacity,
  imageUrl
}: PowerStationCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Badge
          className="absolute top-3 right-3"
          variant="secondary"
        >
          {type}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <CardTitle>{name}</CardTitle>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="flex items-center gap-2 text-sm">
          <Battery className="h-4 w-4 text-energy-green" />
          <span>Capacity: {capacity}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0 flex justify-between">
        <Button variant="outline" size="sm" className="gap-1">
          <Info className="h-4 w-4" />
          Details
        </Button>
        <Button size="sm">Connect</Button>
      </CardFooter>
    </Card>
  );
};

export default PowerStationCard;
