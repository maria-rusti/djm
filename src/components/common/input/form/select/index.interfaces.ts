import { OptionsSelectPropSG } from '../../select/index.interfaces';
import { FormInputPropsSG } from '../base/index.interfaces';

interface FormSelectPropsSG extends FormInputPropsSG {
	options: OptionsSelectPropSG;
	multiple?: boolean;
	includeAll?: boolean;
}

type FakeEvent = { target: { value: string[]; name: string } };

export type { FormSelectPropsSG, FakeEvent };
