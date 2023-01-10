export type ImageData = {
  imageId: number;
  imageUrl: string;
};

const imageData: ImageData[] = [
  {
    imageId: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1522092372459-dff01028d904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    imageId: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1518218392262-1beb4730fb09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    imageId: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1535892449425-d45bdcb2d016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    imageId: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1573478623332-5ecdbc42f2a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    imageId: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1524099163253-32b7f0256868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    imageId: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    imageId: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    imageId: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1544808024-99c59179453f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    imageId: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1576542260349-626bf55262a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxuZXclMjB5b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    imageId: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1572538615668-44cef6712d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxuZXclMjB5b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    imageId: 11,
    imageUrl:
      "https://images.unsplash.com/photo-1621438681255-838765fce783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHxuZXclMjB5b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
];

export const getImageData = () => {
  return imageData;
};
