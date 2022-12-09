import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listFruits = [
    { name: "Apple", price: 40000, bestSeller: true },
    { name: "Orange", price: 35000, bestSeller: false },
    { name: "Banana", price: -20500, bestSeller: true }
  ];

  public districts: any[] = [];
  public cities = [
    {
      city: "Chọn Tỉnh/Thành phố",
      districts: ["Chọn Quận/Huyện"]
    },
    {
      city: "An Giang",
      districts: [
        "Thành phố Long Xuyên",
        "Thành phố Châu Đốc",
        "Thị xã Tân Châu",
        "Huyện An Phú",
        "Huyện Châu Phú",
        "Huyện Châu Thành",
        "Huyện Chợ Mới",
        "Huyện Phú Tân",
        "Huyện Thoại Sơn",
        "Huyện Tịnh Biên",
        "Huyện Tri Tôn"]
    },
    {
      city: "Bà Rịa - Vũng Tàu",
      districts: [
        "Thành phố Vũng Tàu",
        "Thị xã Bà Rịa",
        "Thị xã Phú Mỹ",
        "Huyện Châu Đức",
        "Huyện Côn Đảo",
        "Huyện Đất Đỏ",
        "Huyện Long Điền",
        "Huyện Tân Thành",
        "Huyện Xuyên Mộc"]
    },
    {
      city: "Bạc Liêu",
      districts: [
        "Thành phố Bạc Liêu",
        "Huyện Đông Hải",
        "Huyện Giá Rai",
        "Huyện Hòa Bình",
        "Huyện Hồng Dân",
        "Huyện Phước Long",
        "Huyện Vĩnh Lợi"]
    }];

  constructor() { }

  ngOnInit(): void {
    console.log('Data = ', this.cities);
  }

  public changeCity(event: any) {
    const cityData = event.target.value;

    if(!cityData){
      return;
    }

    //Way 1
    // console.log('event', cityData);
    // const search = this.cities.filter((city) => city.city === cityData);
    // console.log('search', search)

    // if(search && search.length > 0){
    //   this.districts = search[0].districts;
    // }

    //Way 2
    this.districts = this.cities.find(data => data.city === cityData)?.districts || [];
  }
}
