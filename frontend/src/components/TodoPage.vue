<template>
	<div>
		<h1>TodoPage</h1>
		<form class="todoadd">
			<v-text-field v-model="title" label="제목" :rules="[rules.required]"/>
			<v-text-field v-model="detail" label="내용"/>
			<v-btn @click="addtodo" color="info" >추가</v-btn>
		</form>
		<v-simple-table dense v-if="todolist">
		<template v-slot:default>
		<thead>
			<tr>
				<th class="text-left">완료</th>
				<th class="text-left">제목</th>
				<th class="text-left">내용</th>
				<th class="text-left">등록일시</th>
				<th class="text-left">수정/삭제</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="todo in todolist" :key="todo.num" :class="{'donetask' : todo.done == 1}">
				<td><input type="checkbox" id="done" value="complete" v-model="todo.done"></td>
				<td v-if="updatekey != todo.num">{{ todo.title }}</td>
				<td v-else><v-text-field label="제목" v-model="updatetitle"/></td>
				<td v-if="updatekey != todo.num">{{ todo.detail }}</td>
				<td v-else><v-text-field label="내용" v-model="updatedetail"/></td>
				<td>{{ todo.createdt | moment('YYYY-MM-DD HH:mm')}}</td>
				<td>
					<v-btn v-if="updatekey != todo.num" @click="onupdate(todo.num, todo.title, todo.detail)" color="primary" fab class="btn">수정모드</v-btn>
					<v-btn v-else @click="updatetodo(todo.done)" color="success" fab class="btn">수정</v-btn>
					<v-btn @click="deletetodo(todo.num)" color="warning" fab class="btn">삭제</v-btn>
				</td>
			</tr>
		</tbody>
		</template>
		</v-simple-table>
		<p v-if="error" class="error">{{error}}</p>
	</div>
</template>
<script>
export default {
	created () {
		this.getTodolist()
	}, 
	data () {
		return {
			todolist : null,
			error : null,
			detail : '',
			title : '',
			updatekey : null,
			updatetitle : '',
			updatedetail : '',
			rules : {
				required : title => !!title || "Required"
			}
		}
	},
	methods : {
		getTodolist() {
			this.$axios.get('/api/gettodolist', {
	headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers' : 'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization'
			},
			withCredentials: true
		})
		.then((response) => {
			this.todolist = response.data
		})
		.catch((error) => {
			this.error = error
		});
		},
		addtodo() {
			if(this.title == '') {
				return;
			}
			if(this.detail == '') {
				return;
			}
			this.$axios.post('/api/addtodo', {title: this.title,
				detail: this.detail
			}).then(response => {
				alert(response.data == 1 ? '추가완료' : '추가실패!')
				this.getTodolist()
			}).catch(error => {
				this.error = error
			});
		},
		deletetodo(number) {
			var isDelete = confirm( '삭제하겠습니까' );
			if(!isDelete) {
				return;
			}
			this.$axios.delete('/api/deletetodo?num='+ number)
			.then(response => {
				alert(response.data == 1 ? '삭제완료' : '삭제실패!')
				this.detail = ''
				this.title = ''
				this.getTodolist()
			}).catch(error => {
				this.error = error
			});
		},
		onupdate(num, title, detail) {
			this.updatekey = num
			this.updatetitle = title
			this.updatedetail = detail
		},
		updatetodo(done) {
			let updatedone = done === true ? 1 : 0
			this.$axios.put('/api/updatetodo',{
				num : this.updatekey,
				title : this.updatetitle,
				detail : this.updatedetail,
				done : updatedone
			})
			.then(response => {
				alert(response.data == 1 ? '수정완료' : '수정실패!')
				this.updatekey = null
				this.updatetitle = ''
				this.updatedetail = ''
				this.getTodolist()
			}).catch(error => {
				this.error = error
			});
		}
	}
}
</script>
<style>
.error{
	color: white;
	font-size: 25px;
}
.todoadd{
	width: 40%;
	margin-bottom: 25px;
	margin-left: 25px;
}
.btn{
	margin: 5px;
}
.donetask{
	background-color: gray;
}
</style>