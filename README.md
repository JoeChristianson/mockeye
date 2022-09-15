# mockeye

A node package for generating JSON of mock structured data

## about

This package is made for generating fake data for testing and other development purposes. There are methods for writing the mock data into a JSON file or returning it as a Javascript Object or Array for use in your application.

## installation

```npm install mockeye```

## types

### type names

The library includes type names, which are specific strings. Some type names include:

"firstName","lastName","date","id"....

A full list of the available type names appears in the 'type names list' section further below.

### typeSchema

You can use these types to make a schema, similar to how one would with ORMs' schemas. A schema would look like the following

```
{
  name:{
    first:"firstName",
    last:"lastName"
    },
  birthdate:"date",
  email:"email"
}
```
when the mock data is generated all the strings are replaced with a piece of data of that type, i.e. "firstName" is replaced with "Gregory." The mock data generated with
the above schema might look like this:

```
{
  name:{
    first:"Clarice",
    last:"DeNeuve"
    },
  birthdate:"3/13/1985",
  email:"dcenn@gmail.com"
}
```

#### arrays

Schemas can also be or contain arrays. When an array is in a schema, array[0] is the typename (or a nested type schema), and array[1] is the number of elements.

for example, the schema
```
["year",4]

```
would yield an array like
```
[2000,2003,1979,2017]

```

## methods

There are two main methods for the package: fake and write.

### mockeye.fake()

mockeye.fake takes a typeSchema or a typeName as an argument, and returns mock data that fits that schema.

For instance

```
const schema = [{workEmail:"email",workZipCode:"zipcode"},2]
const mockData = mockeye.fake(schema)
console.log(mockData)
```
would log out
```
[
  {
    workEmail:"jine@gmail.com"
    workZipCode:43829
  },
  {
    workEmail:"abbot@hotmail.com"
    workZipCode:22245
  }
]
```
### mockeye.write()

mockeye.write takes in (path,typeSchema) in as arguments. The path is to where the file is written. The typeSchema is either a typename or a schema, which is the 
same as what would be passed into the fake() method as well. 

The method does not return anything, but rather turns the mock data into JSON and saves it at the specified path.

A correct usage would look like 
```
const schema = [{workEmail:"email",workZipCode:"zipcode"},2]
mockeye.write("../mockdata/employeeData.json",schema)
```

#### types

below are the current type names, when the list reaches a certain length, I'll create a web page that will contain this list.


## licensing

MIT
