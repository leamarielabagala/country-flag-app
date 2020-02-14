import faker from 'faker';

export const generateFakeUser = () => ({
  email: faker.internet.email(),
  jobTitle: faker.name.jobTitle(),
  avatar: faker.image.avatar(),
  content: faker.lorem.paragraph(),
  countryCode: faker.address.countryCode(),
});

export const generateFakeUsers = () => {
  const fakeUsers = [];
  for (var i=0; i<10; i++) {
    fakeUsers.push(generateFakeUser());
  }
  return fakeUsers;
}