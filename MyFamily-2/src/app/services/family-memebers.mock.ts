import { FamilyMember } from "./family-memebers.service";

export const familyMockData: Array<FamilyMember> = [
    {
      id: "id-1",
      name: 'Amos',
      phone: '0546372704',
      location: {
        lat: 31.895432, lng: 34.816227
      },
      locationEnable: true,
    },
    {
      id: "id-2",
      name: 'Wife',
      phone: '0541112222',
      location: {
        lat: 31.900615, lng: 34.809511
      },
      locationEnable: true,
    },
    {
      id: "id-3",
      name: 'Boy',
      phone: '0542223333',
      location: {
        lat: 32.013023, lng: 34.774941
      },
      locationEnable: true,
    },
    {
      id: "id-4",
      name: 'Girl',
      phone: '0544445555',
      location: {
        lat: 29.557777, lng: 34.956414
      },
      locationEnable: false,
    }
  ];