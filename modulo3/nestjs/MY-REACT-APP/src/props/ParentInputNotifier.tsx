export default function InputNotifier(props: { onChangeText: (arg0: string) => void; }) {
  return <input type="text" onChange={e => props.onChangeText(e.target.value)} />;
}