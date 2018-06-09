const twitter_config = {
  oauth_consumer_key: "",
  oauth_nonce: "",
  oauth_signature: "",
  oauth_signature_method: "HMAC-SHA1",
  oauth_timestamp: "",
  oauth_token: "",
  oauth_version: "1.0"
};

// prettier-ignore
const auth_headers = {
    Authorization:
        `Oauth oauth_consumer_key="${twitter_config.oauth_consumer_key}", oauth_nonce="${twitter_config.oauth_nonce}", oauth_signature="${twitter_config.oauth_signature}", oauth_signature_method="${twitter_config.oauth_signature_method}", oauth_timestamp="${twitter_config.oauth_timestamp}", oauth_token="${twitter_config.oauth_token}", oauth_version="${twitter_config.oauth_version}"`
}

const callbackUrl = encodeURIComponent(
  `https://61163b6d.ngrok.io/oauth/twitter`
);

module.exports = {
  callbackUrl
};
