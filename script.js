
import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://unppumaqumdqwvomiqpk.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucHB1bWFxdW1kcXd2b21pcXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MDAwMDAsImV4cCI6MjAyNjM3NjAwMH0.kx3X-HJI41c-63A7vPFUVrLIYJVxsbjAAojhAKLThGQ'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
        .from('books')
        .select('*')

    for (let book of books) {
        let booklist = document.getElementById('books');
        booklist.innerHTML += `<tr><td>${book.title}<td/><td>${book.author}</td><td>${book.isbn}</td></tr>`;
    }
}

getBooks();