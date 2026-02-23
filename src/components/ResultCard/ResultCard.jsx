export default function ResultCard({data}){
if(!data) return null;

return (
<div>
<h3>Result</h3>
<p>{data.status}</p>
</div>
)
}
