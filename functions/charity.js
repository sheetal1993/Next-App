const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const table = base(process.env.AIRTABLE_TABLE_NAME);

// To get minified records array
const minifyItems = (records) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record) => {
  if (!record.fields.brought) {
    record.fields.brought = false;
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};
exports.handler = async (event,context) => {
    try {
        const records = await table.select({}).firstPage();
        const minfiedItems = minifyItems(records);
        let charityArr = {
          "care":
          {
            "name": "care",
            "unit": 1,
            "desc": "[[unit]] unit available of care [[price]]",
            "price":450
          },
          "home":
          {
            "name": "home",
            "unit": 2,
            "desc": "[[unit]] unit available of home [[price]]",
            "price":500
          }
        };
        if(minfiedItems.length) {
          for (let i = 0; i < minfiedItems.length; i++) {
              console.log(minfiedItems[i]);
              charityArr[minfiedItems[i].fields.type] = minfiedItems[i].fields;
            }
        }

        //res.status(200).json(minfiedItems);
        return {
            Headers:{
                'Access-Control-Allow-Origin' : '*'
            },
            statusCode: 200,
            body: JSON.stringify(charityArr),
        }
      } catch (error) {
        // console.error(error);
        // res.status(500).json({ msg: "Something went wrong! 😕" });
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        }
      }
    
}