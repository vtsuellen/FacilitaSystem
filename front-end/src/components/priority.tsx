export default function Priority({
  priority,
  setPriority,
}: {
  priority: string;
  setPriority: (priority: string) => void;
}) {
  return (
    <div className='flex items-center gap-2 mt-3'>
      <span className='text-sm font-semibold'>Prioridade:</span>
      <button
        onClick={() => setPriority('baixa')}
        className={`p-2 rounded-full w-5 h-5 ${
          priority === 'baixa' ? 'bg-slate-600' : 'bg-gray-200'
        }`}
        type='button'
      />
      <button
        onClick={() => setPriority('media')}
        className={`p-2 rounded-full w-5 h-5 ${
          priority === 'media' ? 'bg-yellow-400' : 'bg-gray-200'
        }`}
        type='button'
      />
      <button
        onClick={() => setPriority('alta')}
        className={`p-2 rounded-full w-5 h-5 ${
          priority === 'alta' ? 'bg-orange-500' : 'bg-gray-200'
        }`}
        type='button'
      />
      <button
        onClick={() => setPriority('urgente')}
        className={`p-2 rounded-full w-5 h-5 ${
          priority === 'urgente' ? 'bg-red-600' : 'bg-gray-200'
        }`}
        type='button'
      />
    </div>
  );
}
