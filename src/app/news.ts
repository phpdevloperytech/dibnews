export class News {
    public News_Id: string;
    public Category_ID: String;
    public User_Id:string;
    public News_Title:string;
    public News_Description:String;
    public News_Is_Published:Boolean;
    public User_Name:string;
    public News_Is_Editor_Pick:Boolean;
    public News_Search_Tags:string;
    public Seo_Title:string;
    public Seo_Description:string;
    public Seo_Keywords:string;
    public Added_Date:string;
    public Added_Date_String: string;
    public Default_Photo:Default_Photo[];
    public Default_Youtube: Default_Youtube[];
    public Category: Category[];
    public Like_Count:number;
    public Comment_Count:number;
    public Favourite_Count:number;
    public Touch_Count: number;
    public Youtube_Count: number;
    public Image_Count:number;
    public Is_User_Liked:string;
    public Is_User_Favourited: string;
    
    constructor(apiResponse: any){
      this.News_Id =apiResponse.news_id; 
      this.Category_ID =apiResponse.cat_id;
      this.User_Id =apiResponse.user_id;
      this.News_Title =apiResponse.news_title;
      this.News_Description =apiResponse.news_desc;
      this.News_Is_Published =apiResponse.news_is_published;
      this.News_Is_Editor_Pick =apiResponse.news_is_editor_pick;
      this.News_Search_Tags =apiResponse.news_search_tags;
      this.Seo_Title =apiResponse.seo_title;
      this.Seo_Description =apiResponse.seo_desc;
      this.Seo_Keywords =apiResponse.seo_keywords;
      this.Added_Date =apiResponse.added_date;
      this.Added_Date_String =apiResponse.added_date_str;
      this.Default_Photo =apiResponse.default_photo;
      this.Like_Count =apiResponse.Like_Count;
      this.Comment_Count =apiResponse.Comment_Count;
      this.Favourite_Count =apiResponse.favourite_count;
      this.Touch_Count =apiResponse.touch_count;
      this.Youtube_Count =apiResponse.youtube_count;
      this.Image_Count =apiResponse.image_Count;
      this.Is_User_Liked =apiResponse.is_user_liked;
      this.Is_User_Favourited =apiResponse.is_user_favourited;
    }
    
    }
    export class Default_Photo
    {
      public Img_Id: string;
      public Img_Parent_Id: string;
      public Img_Type: string;
      public Img_path: string;
      public Img_Width: number;
      public Img_Height: number;
      public Img_Descreption: string;
    
      constructor(apiResponse: any){
        this.Img_Id =apiResponse.img_id;
        this.Img_Parent_Id =apiResponse.img_parent_id;
        this.Img_Type =apiResponse.img_type;
        this.Img_path =apiResponse.img_path;
        this.Img_Width =apiResponse.img_width;
        this.Img_Height =apiResponse.img_width;
        this.Img_Descreption =apiResponse.img_desc;
      }
    }
    
    export class Default_Youtube
    {
      public News_Youtube_Id: string;
      public News_Id: string;
      public News_Youtube_Url: string;
      public Added_Date: string;
    
      constructor(apiResponse: any){
        this.News_Youtube_Id =apiResponse.news_youtube_id;
        this.News_Id =apiResponse.news_id;
        this.News_Youtube_Url=apiResponse.news_youtube_id;
        this.Added_Date =apiResponse.added_date;
      }
    }
    export class Category
    {
      public Category_Id:string; 
      public Category_Name: string;
      public Category_Ordering: string;
      public Category_Is_Published: boolean;
      public Added_Date: string;
      public Default_Photo: Default_Photo[];
      public User_Selected: string;
    
      constructor(apiResponse: any){
       this.Category_Id =apiResponse.cat_id;
       this.Category_Name =apiResponse.cat_name;
       this.Category_Ordering = apiResponse.cat_ordering;
       this.Category_Is_Published =apiResponse.cat_is_published;
       this.Added_Date =apiResponse.added_date;
       this.Default_Photo =apiResponse.default_photo;
       this.User_Selected = apiResponse.user_selected;
      }
    }
     
    
    