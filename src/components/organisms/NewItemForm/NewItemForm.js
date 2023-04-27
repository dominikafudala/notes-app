/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewItem } from 'redux/reducers/cards/cards.thunk';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import ThemeContext from 'contexts/ThemeContext';
import closeIcon from 'assets/icons/Close_round.svg';
import plusIcon from 'assets/icons/plus.svg';
import styles from './NewItemForm.module.scss';

const NewItemForm = () => {
  const theme = useContext(ThemeContext);
  const [barOpen, setBarOpen] = useState(false);

  const handleBar = () => setBarOpen((prev) => !prev);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    const titleField = document.querySelector('[name="title"]');
    const contentField = document.querySelector('[name="content"]');
    const twitterField = document.querySelector('[name="twitter"]');
    const articleField = document.querySelector('[name="article"]');

    const newItem = {
      title: null,
      content: null,
      type: theme,
      twitterName: null,
      articleUrl: null,
    };

    newItem.title = titleField.value;
    newItem.content = contentField.value;

    if (theme === 'twitter') {
      newItem.twitterName = twitterField.value;
    } else if (theme === 'article') {
      newItem.articleUrl = articleField.value;
    }

    dispatch(addNewItem(newItem));

    document.querySelector(`.${styles.form}`).reset();

    setBarOpen(false);
  };

  return (
    <div className={styles.bar}>
      <div className={`${styles.wrapper} ${styles[theme]} ${barOpen ? styles.barOpen : ''}`}>
        <div className={styles.close} onClick={handleBar} onKeyDown={handleBar} role="button">
          <img src={closeIcon} alt="Close icon" />
        </div>
        <Heading big>{`Add new ${theme}`}</Heading>
        <form className={styles.form} onSubmit={handleAddItem}>
          <Input placeholder="Title" name="title" />
          {theme === 'twitter' && <Input placeholder="Twitter handle eg. this_handle" name="twitter" />}
          {theme === 'article' && <Input placeholder="Article URL" name="article" />}
          <Input placeholder="Description" textarea name="content" />
          <Button colorTheme={theme} type="submit">{`Add ${theme}`}</Button>
        </form>
      </div>
      {!barOpen && <ButtonIcon icon={plusIcon} iconName="plus icon" round onClick={handleBar} />}
    </div>
  );
};

export default NewItemForm;
