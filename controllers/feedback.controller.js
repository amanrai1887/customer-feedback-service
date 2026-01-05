exports.submitFeedback = async (req, res) => {
    const feedback = await Feedback.create({
      ...req.body,
      userId: req.user.id
    });
    res.status(201).json(feedback);
  };

  

  exports.getFeedback = async (req, res) => {
    const { page = 1, limit = 10, rating, source } = req.query;
  
    const filter = {};
    if (rating) filter.rating = rating;
    if (source) filter.source = source;
  
    const data = await Feedback.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });
  
    res.json(data);
  };
  