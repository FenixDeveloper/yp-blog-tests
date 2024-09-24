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
import { RadioGroup } from 'components/radio-group';
import { Select } from 'components/select';
import { Separator } from 'components/separator';
import { Spacing } from 'components/spacing';
import { Text } from 'components/text';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = ({
	currentArticleState,
	setCurrentArticleState,
}: {
	currentArticleState: ArticleStateType;
	setCurrentArticleState: (param: ArticleStateType) => void;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const [newFontFamilyOption, setNewFontFamilyOption] = useState(
		currentArticleState.fontFamilyOption
	);
	const [newFontSize, setNewFontSize] = useState(
		currentArticleState.fontSizeOption
	);
	const [newBackgroundColor, setNewBackgroundColor] = useState(
		currentArticleState.backgroundColor
	);
	const [newFontColor, setNewFontColor] = useState(
		currentArticleState.fontColor
	);
	const [newContentWidth, setNewContentWidth] = useState(
		currentArticleState.contentWidth
	);

	const handleSubmitButton = (event: SyntheticEvent) => {
		event?.preventDefault();
		setCurrentArticleState({
			fontFamilyOption: newFontFamilyOption,
			fontColor: newFontColor,
			backgroundColor: newBackgroundColor,
			contentWidth: newContentWidth,
			fontSizeOption: newFontSize,
		});
	};

	const handleSetDefaultState = () => {
		// Сбрасываем состояние в форме до дэфолтного
		setNewFontFamilyOption(defaultArticleState.fontFamilyOption);
		setNewFontSize(defaultArticleState.fontSizeOption);
		setNewBackgroundColor(defaultArticleState.backgroundColor);
		setNewFontColor(defaultArticleState.fontColor);
		setNewContentWidth(defaultArticleState.contentWidth);
		// Сбрасываем состояние в статье до дэфолтного
		setCurrentArticleState(defaultArticleState);
	};

	return (
		<>
			<ArrowButton
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form onSubmit={handleSubmitButton} className={styles.form}>
					<Text size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Spacing size={50} />
					<Select
						options={fontFamilyOptions}
						selected={newFontFamilyOption}
						title='шрифт'
						onChange={setNewFontFamilyOption}
					/>
					<Spacing size={50} />

					<RadioGroup
						selected={newFontSize}
						name='radio'
						onChange={setNewFontSize}
						options={fontSizeOptions}
						title='размер шрифта'
					/>
					<Spacing size={50} />

					<Select
						options={fontColors}
						selected={newFontColor}
						title='цвет шрифта'
						onChange={setNewFontColor}
					/>
					<Spacing size={50} />

					<Separator />
					<Spacing size={50} />

					<Select
						options={backgroundColors}
						selected={newBackgroundColor}
						title='цвет фона'
						onChange={setNewBackgroundColor}
					/>
					<Spacing size={50} />

					<Select
						options={contentWidthArr}
						selected={newContentWidth}
						title='ширина контента'
						onChange={setNewContentWidth}
					/>
					<Spacing size={50} />
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={handleSetDefaultState}
						/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
