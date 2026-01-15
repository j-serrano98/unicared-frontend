import fetcher from './fetcher';

export default async function getTeachers() {
    console.log("This has been called")
    console.log("fetcher result:", fetcher('teachers/', {
        method: 'GET',
    }));
}