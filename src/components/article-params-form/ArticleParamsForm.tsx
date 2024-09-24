import clsx from 'clsx';
import { SyntheticEvent, useState } from 'react';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = ({
	currentArticleState,
	setCurrentArticleState,
}: {
	currentArticleState: ArticleStateType;
	setCurrentArticleState: (param: ArticleStateType) => void;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [state, setState = useState<ArticleStateType>(currentArticleState);
	
	return (
		<>
			<ArrowButton onClick={() => {
				setIsOpen(!isOpen);
			}} />
			<aside className={clsx(styles.container, isOpen && styles.container_open)}>>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
