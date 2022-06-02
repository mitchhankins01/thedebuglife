const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
  apiKey: process.env.MAIL_CHIMP_KEY,
  server: "us8",
});

module.exports.handler = async function (event, context) {
  try {
    const params = new URLSearchParams(event.body);

    await mailchimp.lists.addListMember("4c3c4eb313", {
      status: "pending",
      email_address: params.get("email"),
      merge_fields: {
        NAME: params.get("name"),
      },
    });

    return { statusCode: 200 };
  } catch (error) {
    if (error.response.body.title === "Member Exists") {
      return { statusCode: 400, body: "exists" };
    } else {
      console.error(error.response.body);
      return { statusCode: 500 };
    }
  }
};
