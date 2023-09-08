/* Imports go  here */
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedHoverText, SectionsWrapper, SectionTitle, SectionWrapper } from './index.styled';
import { FooterChildren, FooterItem } from '..';
import { capitalize, uuid } from '../../../../utils/functions';

interface FooterSectionsProps {
	sections: FooterItem[];
}

const FooterSections: FC<FooterSectionsProps> = ({ sections }): JSX.Element => {
	const { t } = useTranslation();

	return (
		<SectionsWrapper>
			{sections.map(
				(item: FooterItem): JSX.Element => (
					<SectionWrapper key={uuid()}>
						<SectionTitle>
							{capitalize(t(item.title))}
						</SectionTitle>
						{item.children.map(
							({ url, title }: FooterChildren): JSX.Element => (
								<AnimatedHoverText key={uuid()} to={url}>
									{capitalize(t(title))}
								</AnimatedHoverText>
							)
						)}
					</SectionWrapper>
				)
			)}
		</SectionsWrapper>
	);
};

export default FooterSections;
