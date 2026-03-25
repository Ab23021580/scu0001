import { FoodItem, Restaurant } from './types';

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'gongguan-bistro',
    name: 'The Gongguan Bistro',
    description: 'Modern fusion cuisine perfect for a quick lunch between lectures. Famous for Truffle Fries.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG8NUjLOTJC6NzYiXvlixV0upAUufJQCPX9bGcfG6j1HSToZumED_KNrFwVJ3iiGxT7CTThKbFE-IZZhcvhciUvaF4X6C0lSGNS8i9fD6XgpQioSXZZwpeyELFo5sltnPHYZu0BVPmR8e-WWSNnasJi4eIH2KXLejW_IM2FjRt8CfPPKztmALn0npnwJil4Ws5E6uNbzvYfcsm1YYFYdECnbLjuoyujUcMIddPXJ2cGYNaiNBOIkP2I8VdLnY6nX78Nke_RNGes44',
    rating: 4.9,
    reviews: '1.2k',
    deliveryTime: 'Under 15 min',
    tags: ['Free Delivery', 'Under 15 min'],
    menu: [
      {
        id: 'varsity-burger',
        name: 'The Varsity',
        description: 'Double beef patty, aged cheddar, campus secret sauce, and artisanal pickles on brioche.',
        price: 12.50,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNgN2gpnPmgKlXUI4IyBx8ENq-Zw4WH12lT8A4k0jcx0geTYb74NCtPZvel1xx4jTpl4gwthXMYcRlSuiVlk-YV6U8GuK3Uw18WRW9bIW__3ptlmPeDV-JvdU1JjK4OHC_lA_uWpdJZqccJjzYG7k0foBn0pKdiv6S1-Xn5CBnXq8V3_LAWY9oocnuPyKvV8CgT2jVatdAcu6V9KgyqPuYSsBHYaOxPO2evLi4Th4u-A7IAv7Iznv408CnJU4RH2Uq5i6lNB-F7Yw',
        prepTime: '12-15 min',
        calories: '840 kcal'
      },
      {
        id: 'final-exam',
        name: 'The Final Exam',
        description: 'Triple stacked beef, maple-glazed bacon, fried egg, and hashbrown. For the brave.',
        price: 14.00,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiqbz0t2oHH_kva4JefDLK6NY6VuZSvcBvuorgkIzic7CUnF3iEYLGN3DgAyJmWTYiukz0G932CJ7xghK0AuEDdMrP_VHO7IvEAd7KSu9V8HSg1EhKdy2iM0npHEznDdhqbWubPiHMipVJAgxo13sP0AM1ONLAkRERZkuCG8H4rhmNRKicTArk5NnpWe0D0-se6IEvr0RmvR2o9ngVlsexkoIFTGlm1XWwToABEAKp4qECFoNzzbiVYVGFBln0qaBE73CAvrdxjGQ'
      },
      {
        id: 'scholars-choice',
        name: "Scholar's Choice",
        description: 'Plant-based patty, smashed avocado, alfalfa sprouts, and sundried tomato pesto.',
        price: 11.50,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl09J8Yi0GkWHCF2saUzlRxDZJPV-TpeI7d_ASW5Ie4kZl2qrbzqrtl2AK7_e8wIvCaySNSP8lIpIbL9ZaEJWS_wrQ1CTSXVkIBSE_vWh1gKJWVkuKhqQXx5pzat6-qy4_qMS5_aLKVS0YIz19sups-vfRlRXY4KroLU6QPS77o8MViUxXXaTQM2pB6BaEtgJ4VSF5wnYI9LArrbB17zThb1x4NeEd8Nx5i_S_xcuOPmXlzjz2hKaXoPFPcQ6LFA9FpA7bdi8KwJ0'
      }
    ]
  }
];

export const QUICK_BITES = [
  { name: 'Pizza', icon: 'local_pizza' },
  { name: 'Burger', icon: 'lunch_dining', active: true },
  { name: 'Salad', icon: 'restaurant_menu' },
  { name: 'Drinks', icon: 'local_bar' },
  { name: 'Bakery', icon: 'bakery_dining' },
  { name: 'Dessert', icon: 'icecream' },
];

export const RECOMMENDED_ITEMS: FoodItem[] = [
  {
    id: 'green-box',
    name: 'The Green Box',
    description: 'Healthy • Vegan • Bowls',
    price: 12.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhHYLVCXRbSs84ZzdRJSkXLHmwQLMvSVDNbFaXLByJCvlcLsSU2JqJhLbbcSbMqYsNlBarf3SHwpX1WmM-9OagD8F6aZogAutYigS9bnrN1R0NgASfu33wmq5vOvulz1xMtKh06mYE0m56kFxEekvY_WrdhzCVeAuTmtu1Rc7wQo0xaBif7GI8Cb1NHT7evZZeC9aFuYwXKyTvYDQdPlCxLbYMCfMluh8qTDe1vARztI3jcO0aijXbNEmHeDWcm7itPZLX2_X_5fE',
    rating: 4.7,
    prepTime: '20-30 min'
  },
  {
    id: 'campus-grill',
    name: 'Campus Grill',
    description: 'Burger • Fries • Fast',
    price: 9.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ZTVd9EqwxtQUA2yCbciP9KVCLUFb0lGf6vDVkloz8jR-Sxc1SNmdbaiJxJHIc5Sbjn0dJHl4A28jkx4OSW41aoAS9_YAvu6ejSs2qj_yGIa4PKT-XqcmUiVfs-lVP4ywkTOigjR9vekm7BDsRIq73S1fW6PZPBB7_5oa2lAn0OHu0_UROgQFl0wrsZZjMY5cQC60lPOzlmTpnx3csCe1yd_2knB1PwWUDr3RHqryzdPiNpssaKT8k2rCrSegtCvxwakpw8kTMBg',
    rating: 4.8,
    prepTime: '15-25 min'
  },
  {
    id: 'matcha-lab',
    name: 'Matcha Lab',
    description: 'Tea • Boba • Dessert',
    price: 6.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPF8wODVQ3Mn3pLZpYrwJzuoJ2vPJBKSrgITJttm8q5Qg-Zzn70mJVJvY-gB2FGIqFK4qoSMiiVUm2KSc0LGEZh5qHJxtfWa7JfpoxINToF5ZP6JVQpGu46kIJTKjKCV0Gi5B-Oc_IdED3X8BkejUoCi_52Iob8BCWx_2rrYD2DswfeLUpO6A9zvEkPDZjLNV5P5YrRjCwLvdrtjbWLnLSwf4bne_znQpKFjuIExgNszm_XxP54GlJkQlM2OzDtRz99qo7tnsrZpg',
    rating: 5.0,
    prepTime: '10 min'
  }
];
