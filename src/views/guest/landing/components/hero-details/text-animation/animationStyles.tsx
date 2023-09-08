export type AnimateObject = {
	translate: {
		type: string
		value: number
		unit: string
	}
	opacity: number
}

export type Animations = 'simple' | 'rightLeft' |
	'leftRight' | 'topDown' | 'downTop' | 'flash' |
	'flip' | 'scale' | 'press'

const animationStyles: Record<Animations, AnimateObject[]> = {
	simple: [{
		translate: {
			type: 'translateX',
			value: 0,
			unit: 'px'
		},
		opacity: 1
	}, {
		translate: {
			type: 'translateX',
			value: 0,
			unit: 'px'
		},
		opacity: 0
	}],
	rightLeft: [{
		translate: {
			type: 'translateX',
			value: 0,
			unit: 'px'
		},
		opacity: 1
	}, {
		translate: {
			type: 'translateX',
			value: 10,
			unit: 'px'
		},
		opacity: 0
	}],
	leftRight: [{
		translate: {
			type: 'translateX',
			value: 10,
			unit: 'px'
		},
		opacity: 1
	}, {
		translate: {
			type: 'translateX',
			value: 0,
			unit: 'px'
		},
		opacity: 0
	}],
	topDown: [{
		translate: {
			type: 'translateY',
			value: 0,
			unit: 'px'
		},
		opacity: 1
	}, {
		translate: {
			type: 'translateY',
			value: -10,
			unit: 'px'
		},
		opacity: 0
	}],
	downTop: [
		{
			translate: {
				type: 'translateY',
				value: 0,
				unit: 'px'
			},
			opacity: 1
		},
		{
			translate: {
				type: 'translateY',
				value: 9,
				unit: 'px'
			},
			opacity: 0.9
		},
		{
			translate: {
				type: 'translateY',
				value: 8,
				unit: 'px'
			},
			opacity: 0.8
		},
		{
			translate: {
				type: 'translateY',
				value: 7,
				unit: 'px'
			},
			opacity: 0.7
		},
		{
			translate: {
				type: 'translateY',
				value: 6,
				unit: 'px'
			},
			opacity: 0.6
		},
		{
			translate: {
				type: 'translateY',
				value: 5,
				unit: 'px'
			},
			opacity: 0.5
		},
		{
			translate: {
				type: 'translateY',
				value: 4,
				unit: 'px'
			},
			opacity: 0.4
		},
		{
			translate: {
				type: 'translateY',
				value: 3,
				unit: 'px'
			},
			opacity: 0.3
		},
		{
			translate: {
				type: 'translateY',
				value: 2,
				unit: 'px'
			},
			opacity: 0.2
		},
		{
			translate: {
				type: 'translateY',
				value: 10,
				unit: 'px'
			},
			opacity: 0
		}
	],
	flash: [{
		translate: {
			type: 'skewX',
			value: 0,
			unit: 'deg'
		},
		opacity: 1
	}, {
		translate: {
			type: 'skewX',
			value: -100,
			unit: 'deg'
		},
		opacity: 1
	}],
	flip: [{
		translate: {
			type: 'rotateX',
			value: 0,
			unit: 'deg'
		},
		opacity: 1
	}, {
		translate: {
			type: 'rotateX',
			value: -180,
			unit: 'deg'
		},
		opacity: 1
	}],
	scale: [{
		translate: {
			type: 'scale',
			value: 1,
			unit: ''
		},
		opacity: 1
	},
	{
		translate: {
			type: 'scale',
			value: 0.3,
			unit: ''
		},
		opacity: 1
	},
	{
		translate: {
			type: 'scale',
			value: 0.5,
			unit: ''
		},
		opacity: 1
	},
	{
		translate: {
			type: 'scale',
			value: 0.7,
			unit: ''
		},
		opacity: 1
	},
	 {
		translate: {
			type: 'scale',
			value: 0.9,
			unit: ''
		},
		opacity: 1
	}],
	press: [{
		translate: {
			type: 'scaleX',
			value: 1,
			unit: ''
		},
		opacity: 1
	}, {
		translate: {
			type: 'scaleX',
			value: 1.3,
			unit: ''
		},
		opacity: 1
	}]
};

export default animationStyles;