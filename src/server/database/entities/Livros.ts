import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Editora } from './Editoras';

@Entity('livros')
export class Livro {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ type: 'text', nullable: false })
    titulo: string;

    @Column({ type: 'text', nullable: false })
    autor: string;

    @Column({ type: 'text', nullable: false, unique: true })
    isbn: string;

    @Column({ nullable: false, type: "date" })
    ano_publicacao?: Date;

    @CreateDateColumn({ nullable: false, type: "timestamp" }) // Alteração do tipo para timestamp
    data_criacao: Date

    @UpdateDateColumn({ nullable: false, type: "timestamp" }) // Alteração do tipo para timestamp
    data_atualizacao: Date

    @ManyToOne(() => Editora, editora => editora.livro)
    @JoinColumn({ name: 'editora_id' })
    editora?: Editora | null;

}