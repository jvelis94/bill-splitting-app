import React from 'react';
import ShareIcon from '@material-ui/icons/Share';

const ShareBill = (props) => {
    const handleOnClick = () => {
        if (navigator.share) {
          navigator
            .share({
              title: `${props.person.name} bill`,
              text: `Hey ${props.person.name}, had fun the other day, your portion of the bill is $${props.person.total}`,
              url: "https://venmo.com/",
            })
            .then(() => {
              console.log('Successfully shared');
            })
            .catch(error => {
              console.error('Something went wrong sharing the bill', error);
            });
        }
      };

  return (
    <div onClick={handleOnClick}>
      <ShareIcon />
    </div>
  );
};

export default ShareBill;