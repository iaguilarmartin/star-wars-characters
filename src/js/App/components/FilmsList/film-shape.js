import PropTypes from 'prop-types';

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  opening_crawl: PropTypes.string.isRequired,
  episode_id: PropTypes.number.isRequired
});
