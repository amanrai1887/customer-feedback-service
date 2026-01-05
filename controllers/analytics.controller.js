exports.analytics = async (req, res) => {
    const avgRating = await Feedback.aggregate([
      { $group: { _id: null, avg: { $avg: "$rating" } } }
    ]);
  
    const perDay = await Feedback.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 }
        }
      }
    ]);
  
    res.json({ avgRating, perDay });
  };
  