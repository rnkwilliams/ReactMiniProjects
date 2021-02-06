import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 22uHYpT9vDmajjBc_-rHoYlNpZ7BkL0_F9CGo0PrDaw'
  }
});