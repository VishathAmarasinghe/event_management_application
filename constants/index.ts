export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Host Event",
    route: "/events/create",
  },
  {
    label: "Personal Hub",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
