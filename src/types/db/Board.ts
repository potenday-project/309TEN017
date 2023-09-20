type Board = {
  id: number;
  user_id: number;
  created_at: Date;
  price: number;
  title: string;
  content: string;
  image_url: string;
  is_bought: boolean;
};

export default Board;
