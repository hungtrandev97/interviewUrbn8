select top 10 st.St_id as student_id, st.St_name As student_name, gr.Marks, sb.Sub_name as subject_name
from Student st, Grade gr, Subject sb
WHERE st.St_id = gr.St_id 
and gr.Sub_code = sb.Sub_code
and gr.marks in (select max(marks) from Grade  group by sub_code)
ORDER BY st.St_name;