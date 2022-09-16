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

The type names are also available at: 
```mockeye.types```

Using the mockeye.types object allows autofill on an editor, so it is the best way of avoiding spelling errors. Additionally, you may not have to look up the documentation for the name.

### typeSchema

You can use these type names to create a schema. A schema would look like the following

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

Schemas can also be or contain arrays. When an array is in a schema, array[0] is a typename (or a nested type schema), and array[1] is the number of elements.

for example, the schema
```
["year",4]

```
would yield an array like
```
[2000,2003,1979,2017]

```

### String Templates

Schemas can also use templates for string values. To use, make an object like so:
```
{
  template:true,
  typesArray:[<typeNamesListedHere>],
  string:<string here>}
```
Within the string, "*<index number of type in typesArray>*" will be replaced with a value of the type.

For example:
```
{template:true,
typesArray:["city","firstName","lastName"]
template:"My name is *1* *2*, and I live in *0*. That's why I am called *0* *1*."
}
```
Would produce:
```
"My name is Jane Seymour, and I live in Tallahassee. That's why I am called Tallahassee Jane."
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

mockeye.write takes in (path,typeSchema) in as arguments. The path is to where the file is written. The typeSchema is either a typename or a schema (this is the same as the first argument of the fake method).

The mockeye.write() method does not return anything, but rather converts the mock data into JSON and saves that JSON at the specified path.

A correct usage would look like 
```
const schema = [{workEmail:"email",workZipCode:"zipcode"},2]
mockeye.write("../mockdata/employeeData.json",schema)
```

#### type names list

Below are the current type names. When the list reaches a certain length, I'll create a web page that will contain this list.


- "firstName"
- "lastName"
- "email"
- "phone"
- "tf" (true or false)
- "url"
- "date"
- "timeStamp"
- "year"
- "month"
- "day"
- "dayOfWeek"
- "zipCode"
- "zipCodeFull"
- "fileName"
- "extension"
- "string"
- "number"
- "id"
- "paragraph"

## licensing

MIT
