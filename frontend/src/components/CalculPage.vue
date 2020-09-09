<template>
	<div>
		<h1>CalculPage</h1>
		<v-chip label>{{detail}}</v-chip>
		<div class="calculator">
			<div class="display">{{result}}</div>
			<div class="btn" @click="clear">C</div>
			<div class="btn" @click="sign">+/-</div>
			<div class="btn" @click="percent">%</div>
			<div class="btn operator" @click="clickcal('/')">/</div>
			<div class="btn" @click="clicknum(7)">7</div>
			<div class="btn" @click="clicknum(8)">8</div>
			<div class="btn" @click="clicknum(9)">9</div>
			<div class="btn operator" @click="clickcal('*')">*</div>
			<div class="btn" @click="clicknum(4)">4</div>
			<div class="btn" @click="clicknum(5)">5</div>
			<div class="btn" @click="clicknum(6)">6</div>
			<div class="btn operator" @click="clickcal('-')">-</div>
			<div class="btn" @click="clicknum(1)">1</div>
			<div class="btn" @click="clicknum(2)">2</div>
			<div class="btn" @click="clicknum(3)">3</div>
			<div class="btn operator" @click="clickcal('+')">+</div>
			<div class="btn zero" @click="clicknum(0)">0</div>
			<div class="btn" @click="dot('.')">.</div>
			<div class="btn operator" @click="enter">=</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			detail: '',
			result : 0,
			input : '',
			caltype : null,
			cal1 : null,
			operator : false
		}
	},
	methods: {
		clear() {
			this.detail = ''
			this.result = 0
			this.input = ''
			this.caltype = null
			this.cal1 = null
			this.operator = false
		}, 
		sign() {
			if(this.input.charAt(0) === '-' ) {
				this.input = this.input.slice(1)
			} else {
				this.input = `-${this.input}`
			}
			this.result = parseFloat(this.input)
		}, 
		percent() {
			this.result = `${parseFloat(this.result) / 100}`
		},
		cal() {
			switch(this.caltype) {
				case '+':
					this.cal1 = parseFloat(this.cal1) + parseFloat(this.input)
				break;
				case '-':
					this.cal1 = parseFloat(this.cal1) - parseFloat(this.input)
				break;
				case '*':
					this.cal1 = parseFloat(this.cal1) * parseFloat(this.input)
				break;
				case '/':
					this.cal1 = parseFloat(this.cal1) / parseFloat(this.input)
				break;
			}
		},
		clickcal(clickdata) {
			if(this.cal1 == null) {
				this.cal1 = this.input
				this.input = ''
				this.writedetail(clickdata)
			} else if(this.input != ''){
				if(this.caltype == '/' && parseFloat(this.input) == 0){
					this.result = '에러, 0으로 나눌수는 없습니다.'
					return
				}
				this.cal()
				this.writedetail(clickdata)
				this.result = parseFloat(this.cal1)
				this.input = ''
			}
			this.caltype = clickdata
		},
		clicknum(num) {
			this.input = `${this.input}${num}`
			this.result = parseFloat(this.input)
			this.writedetail(num)
		},
		dot() {
			if(this.input.length > 0 && this.input.indexOf('.') === -1) {
				this.input = `${this.input}.`
				this.result = this.input
				this.writedetail('.')
			}
		},
		writedetail(text) {
			this.detail += String(text)
		},
		enter(){
			if(this.cal1 == null || this.caltype == null) {
				return
			}
			if(this.input != ''){
				if(this.caltype == '/' && parseFloat(this.input) == 0){
					this.result = '에러, 0으로 나눌수는 없습니다.'
					return
				}
				this.cal()
			}
			this.result = parseFloat(this.cal1)
		}

	}
}
</script>
<style>
	.calculator {
		margin: 0 auto;
		width:400px;
		text-align: center;
		font-size: 40px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: minmax(50px, auto);
	}
	.display {
		grid-column: 1/5;
		background-color: #333;
		color: white;
	}
	.zero {
		grid-column: 1/3;
	}
	.btn {
		background-color: #eee;
		border: 1px solid #333;
	}
	.operator{
		background-color: orange;
		color: white;
	}
</style>