import React, { useState } from 'react';
import { Star, ThumbsUp, MessageCircle, X } from 'lucide-react';
import { ReviewForm } from './ReviewForm';

interface Review {
  id: number;
  user: {
    name: string;
    image: string;
  };
  rating: number;
  date: string;
  content: string;
  helpful: number;
  images?: string[];
  replies?: Reply[];
}

interface Reply {
  id: number;
  user: {
    name: string;
    image: string;
  };
  content: string;
  date: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  ratingDistribution: { [key: number]: number };
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews: initialReviews,
  averageRating,
  totalReviews,
  ratingDistribution,
}) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [likedReviews, setLikedReviews] = useState<number[]>([]);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleReviewSubmit = (reviewData: {
    rating: number;
    content: string;
    images: string[];
  }) => {
    const newReview = {
      id: reviews.length + 1,
      user: {
        name: "You",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
      },
      rating: reviewData.rating,
      date: "Just now",
      content: reviewData.content,
      helpful: 0,
      images: reviewData.images,
      replies: []
    };

    setReviews([newReview, ...reviews]);
    setShowReviewForm(false);
  };

  const handleLike = (reviewId: number) => {
    if (likedReviews.includes(reviewId)) {
      setLikedReviews(likedReviews.filter(id => id !== reviewId));
      setReviews(reviews.map(review =>
        review.id === reviewId
          ? { ...review, helpful: (review.helpful || 0) - 1 }
          : review
      ));
    } else {
      setLikedReviews([...likedReviews, reviewId]);
      setReviews(reviews.map(review =>
        review.id === reviewId
          ? { ...review, helpful: (review.helpful || 0) + 1 }
          : review
      ));
    }
  };

  const handleReplySubmit = (reviewId: number) => {
    if (!replyContent.trim()) return;

    const newReply: Reply = {
      id: Date.now(),
      user: {
        name: "You",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
      },
      content: replyContent,
      date: "Just now"
    };

    setReviews(reviews.map(review =>
      review.id === reviewId
        ? {
            ...review,
            replies: [...(review.replies || []), newReply]
          }
        : review
    ));

    setReplyContent('');
    setReplyingTo(null);
  };

  return (
    <div className="border-t mt-16 pt-16">
      <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill={i < Math.round(averageRating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">Based on {totalReviews} reviews</div>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => {
                const percentage = (ratingDistribution[rating] / totalReviews) * 100;
                return (
                  <div key={rating} className="flex items-center gap-2">
                    <div className="text-sm text-gray-600 w-12">{rating} stars</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-600 w-12">{Math.round(percentage)}%</div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setShowReviewForm(true)}
            className="w-full mt-4 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Write a Review
          </button>
        </div>

        <div className="lg:col-span-2 space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={review.user.image}
                    alt={review.user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{review.user.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400"
                            fill={i < review.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{review.content}</p>

              {review.images && review.images.length > 0 && (
                <div className="flex gap-4 mb-4">
                  {review.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Review image ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  ))}
                </div>
              )}

              <div className="flex items-center gap-6 text-sm mb-4">
                <button
                  onClick={() => handleLike(review.id)}
                  className={`flex items-center gap-2 transition-colors ${
                    likedReviews.includes(review.id)
                      ? 'text-teal-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <ThumbsUp
                    className="h-4 w-4"
                    fill={likedReviews.includes(review.id) ? 'currentColor' : 'none'}
                  />
                  Helpful ({review.helpful})
                </button>
                <button
                  onClick={() => setReplyingTo(review.id)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <MessageCircle className="h-4 w-4" />
                  Reply
                </button>
              </div>

              {/* Replies Section */}
              {review.replies && review.replies.length > 0 && (
                <div className="ml-12 space-y-4 mt-4">
                  {review.replies.map((reply) => (
                    <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={reply.user.image}
                          alt={reply.user.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <span className="font-medium">{reply.user.name}</span>
                          <span className="text-sm text-gray-500 ml-2">{reply.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Reply Form */}
              {replyingTo === review.id && (
                <div className="ml-12 mt-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Write a Reply</h4>
                      <button
                        onClick={() => setReplyingTo(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder="Write your reply..."
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
                      rows={3}
                    />
                    <div className="flex justify-end gap-2 mt-2">
                      <button
                        onClick={() => setReplyingTo(null)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleReplySubmit(review.id)}
                        className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                      >
                        Submit Reply
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showReviewForm && (
        <ReviewForm
          onSubmit={handleReviewSubmit}
          onClose={() => setShowReviewForm(false)}
        />
      )}
    </div>
  );
};