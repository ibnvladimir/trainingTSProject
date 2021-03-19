type User = {name: string, age: number, getJobs?: () => string[], jobs: [string, string]};

let user:  User= {
    name: 'andr',
    age: 33,
    jobs: ['a', 'b'],
    getJobs(){
        return this.jobs;
    }
};



function printUser(user: User): void {
    console.log(user.name + ' ' + user.age);
}

printUser(user);

let variable;
