import { User } from "./User";
import { Company } from "./Company";

// instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divID), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });
  }
  //   addCompanyMarker(company: Company): void {
  //     new google.maps.Marker({ map: this.googleMap, position: company.location });
  //   }
}
