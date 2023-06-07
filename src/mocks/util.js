const wrapMockResponse = (res) => {
  return {
    body: {
      error: false,
      message: 'Success',
      data: res,
    },
  };
};

module.exports = wrapMockResponse;
